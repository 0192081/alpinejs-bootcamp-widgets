document.addEventListener('alpine:init', () => {
    Alpine.data('enough-airtime-widget', function() {
        return {
            airtimeUsage : '',
            availableAmount : '',
            airtimeMessage : '',
            calculate(){
            this.airtimeMessage = enoughAirtime (this.airtimeUsage, this.availableAmount)
            }
        }
    });
})