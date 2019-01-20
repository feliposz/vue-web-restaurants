Vue.component('restaurant-nav', {
    template: '#restaurant-nav',
    data: function () {
        return {
            restaurants: [],
        };
    },
    mounted: function () {
        var vm = this;
        axios.get('https://challange.goomer.com.br/restaurants').then(function (res) {
            vm.restaurants = res.data;
        });
    },
    methods: {
        select: function (id) {
            this.$eventHub.$emit('selected', id);
        }
    }
});

Vue.component('restaurant-card', {
    template: '#restaurant-card',
    data: function () {
        return {
            restaurant: {
                name: 'Bem-vindo ao guia de restaurantes',
                address: 'Por favor, selecione um restaurante na lista acima.',
                image: 'https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_960_720.jpg',
            },
        };
    },
    mounted: function () {
        var vm = this;
        this.$eventHub.$on('selected', function (id) {
            axios.get('https://challange.goomer.com.br/restaurants/' + id).then(function (res) {
                vm.restaurant = res.data;
            });
        });
    }
});

Vue.component('restaurant-menu', {
    template: '#restaurant-menu',
    data: function () {
        return {
            menu: {},
        };
    },
    mounted: function () {
        var vm = this;
        this.$eventHub.$on('selected', function (id) {
            axios.get('https://challange.goomer.com.br/restaurants/' + id + '/menu').then(function (res) {
                vm.menu = res.data;
            });
        });
    },
    filters: {
        currency: function (value) {
            if (value) {
                return 'R$ ' + value.toFixed(2).replace('.', ',');
            }
        }
    },
});

Vue.prototype.$eventHub = new Vue();

var app = new Vue({
    el: '#app'
});
