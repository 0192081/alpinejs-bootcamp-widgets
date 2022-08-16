document.addEventListener('alpine:init', () => {
    Alpine.data('transportFeeWidget', function () {
        return {
            shift: '',
            message: '',
            showFee: false,
            showFee (){
                this.message = transportFee (this.shift);
            }

        }
    });
})