<template>
  <section class="checkout container py-5">
    <h2 class="mb-4">Checkout</h2>

    <div class="row">
      <div class="col-12 col-md-6">
        <div class="card p-3">
          <h5>Shipping Information</h5>
          <form @submit.prevent="startPayment">
            <div class="mb-3">
              <label class="form-label">Full name</label>
              <input v-model="form.name" type="text" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="form.email" type="email" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Phone</label>
              <input v-model="form.phone" type="tel" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Address</label>
              <textarea v-model="form.address" class="form-control" rows="3" required></textarea>
            </div>

            <div class="d-flex gap-2">
              <button type="submit" class="btn btn-primary" :disabled="processing">Pay Now</button>
              <button type="button" class="btn btn-outline-secondary" @click="cancel" :disabled="processing">Cancel</button>
            </div>
          </form>

          <div v-if="message" class="alert mt-3" :class="messageClass">{{ message }}</div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="card p-3">
          <h5>Order Summary</h5>
          <ul class="list-group mb-3">
            <li v-for="it in items" :key="it.id" class="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <div class="fw-bold">{{ it.title }}</div>
                <div class="text-muted">{{ it.qty }} × {{ formatCurrency(it.price) }}</div>
              </div>
              <div class="fw-semibold">{{ formatCurrency((it.price || 0) * (it.qty || 1)) }}</div>
            </li>
          </ul>
          <div class="d-flex justify-content-between align-items-center">
            <div class="h5">Total</div>
            <div class="h5">{{ formatCurrency(total) }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { cartItems, cartTotal, clearCart } from '@/stores/cart.js'

const router = useRouter()
const items = cartItems
const total = cartTotal

const form = ref({ name: '', email: '', phone: '', address: '' })
const processing = ref(false)
const message = ref('')
const messageClass = ref('')

function formatCurrency(v) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Number(v) || 0)
}

function cancel() {
  router.push({ name: 'cart' })
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const s = document.createElement('script')
    s.src = src
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}

async function startPayment() {
  if (!form.value.name || !form.value.email || !form.value.phone || !form.value.address) {
    message.value = 'Please fill all shipping fields.'
    messageClass.value = 'alert-danger'
    return
  }

  processing.value = true
  message.value = ''

  try {
    // load paystack inline script
    await loadScript('https://js.paystack.co/v1/inline.js')

    const publicKey = import.meta.env.VITE_PAYSTACK_KEY || ''
    if (!publicKey) {
      throw new Error('Paystack public key not configured. Set VITE_PAYSTACK_KEY in .env')
    }

    const handler = window.PaystackPop && window.PaystackPop.setup({
      key: publicKey,
      email: form.value.email,
      amount: Math.round((Number(total.value) || 0) * 100), // kobo
      currency: 'NGN',
      ref: 'ps_' + Date.now(),
      metadata: {
        custom_fields: [
          { display_name: 'Customer Name', variable_name: 'customer_name', value: form.value.name },
          { display_name: 'Phone', variable_name: 'phone', value: form.value.phone },
        ]
      },
      callback: function(response) {
        // Payment successful
        message.value = 'Payment successful. Reference: ' + response.reference
        messageClass.value = 'alert-success'
        // clear cart
        clearCart()
        processing.value = false
        // optionally redirect to success page or home
        setTimeout(() => router.push({ name: 'home' }), 1500)
      },
      onClose: function() {
        processing.value = false
        message.value = 'Payment window closed.'
        messageClass.value = 'alert-warning'
      }
    })

    if (!handler) throw new Error('Paystack script failed to initialise')

    handler.openIframe()
  } catch (err) {
    processing.value = false
    message.value = err.message || String(err)
    messageClass.value = 'alert-danger'
  }
}
</script>

<style scoped>
.checkout { font-family: 'Outfit', sans-serif }
.card { border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.04) }
</style>
