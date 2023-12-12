// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.



const { createApp } = Vue

createApp({
  data() {
    return {
      error: false,
      message: "",

      todos: [
        {
            text: 'Fare i compiti',
            done: false
        },
        {
            text: 'Fare la spesa',
            done: true
        },
        {
            text: 'Fare il bucato',
            done: false
        }
    ],

    }
  },

  methods: {
    addTask() {
       if (this.message.length < 3){
        this.error = true;
       }else{
        this.todos.unshift({ text: this.message, done: false });
        this.message= "" 
        this.error = false;
       }
         
    },
},

  
}).mount('#app')
