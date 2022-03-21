class Display {
   constructor(current, history) {
      this.current = current;
      this.history = history;
   }

   getCurrent() {
      return this.current.innerHTML;
   }

   setCurrent(string) {
      this.current.innerHTML = string;
   }

   setHistory(string) {
      this.history.innerHTML = string;
   }
}
export { Display };
