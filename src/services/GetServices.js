import { ref } from "vue";

class GetService {
  constructor() {
    this.helado = ref([]);
  }

  getHelado() {
    return this.helado;
  }

  async fetchAll() {
    try {
      const key = 'IGMiThHiKO1FSjWiv0V7oJo9Ek8Soch0J1t37ZjhNqzvtstuYpKefHOy';
      const url = 'https://api.pexels.com/v1/search';
      const query = 'ice cream';

      const response = await fetch(`${url}?query=${query}&per_page=12`, {
        headers: {
          Authorization: key,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      this.helado.value = json.photos;
      console.log(this.helado);
    } catch (error) {
      console.error('Error al obtener imágenes:', error);
    }
  }
}

export default GetService;