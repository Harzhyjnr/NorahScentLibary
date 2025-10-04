<template>
    <div class="container my-5 d-flex flex-column align-items-center faqs-section">
        <h2 class="mb-4">Frequently Asked Questions</h2>
        <p>Everything you need to know about the product and billing.</p>
        <div class="accordion w-100" id="faqAccordion">
            <div class="accordion-item my-2 border-0 !important" v-for="(faq, index) in faqs" :key="index">
                <h2 class="accordion-header" :id="'heading' + index">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
                        {{ faq.question }}
                    </button>
                </h2>
                <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    faqs: {
        type: Array,
        default: () => ([
        {
            id: 1,
            question: "What is Norah?",
            answer: "Norah is a premium fragrance brand offering a curated selection of high-quality perfumes and colognes for, men and women."
        },
        {
            id: 2,
            question: "Can I return a perfume if I don’t like the scent?",
            answer: "Due to hygiene reasons, we only accept returns for unopened and unused products. Please read the return policy for full details."
        },
        {
            id: 3,
            question: "Are your perfumes original?",
            answer: "Yes, we offer only authentic, high-quality perfumes sourced directly from trusted brands and perfumers."
        },
        {
            id: 4,
            question: "How do I choose the right perfume for me?",
            answer: "Consider your personality, style, and occasions. Light, fresh scents are great for daytime, while deeper, spicier notes suit evenings or formal events."
        },
])
    }
})
</script>

<style lang="scss" scoped>
.faqs-section{
    font-family: "Outfit", sans-serif;
    text-align: center;
}


.accordion-button{
    background: #f5f4f4;
    border-top-left-radius: 0;
}
  h2{
    font-size: 1.5rem;
    font-weight: 600;
   }
.accordion-button:focus {
    z-index: 3;
    outline: 0;
    box-shadow:none;
}

@media(max-width: 600px) {
   .accordion-button{
    font-size: .8rem;
   }
   .accordion-collapse{
    font-size: .8rem;
   }

   p{
    font-size: .8rem;
   }

   h2{
    font-size: 1.2rem;
    font-weight: 600;
   }
    
}
</style>