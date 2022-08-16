document.addEventListener('alpine:init', () => {
    Alpine.data('greetwidget', function() {
        return {
            name : '',
            message : '',
            showGreeting : false,
            greetMe(){
           this.message = greet(this.name);

           setTimeout (() => {
            this.message = '';
            this.name = '';
            showGreeting = false;
        },3000);
    
        }
        }
    });
})