/* eslint-disable */

<template>
    <div class="nav-container">
        <nav>
            <ul class="nav-items-container">
                <li v-for="item in nav_items" :key="item.route" class="nav-item">
                    <router-link :to=item.route class="nav-item__link"> {{item.name}} </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            nav_items: [
                {
                    route: '/about',
                    name: 'About',
                }, {
                    route: '/projects',
                    name: 'Projects',
                }, {
                    route: '/contact',
                    name: 'Contact',
                },
            ],
        }
    },
};
</script>

<style lang="scss" scoped>
@import './../assets/main.scss';

.nav-container {
    background-color: $color-white;
    box-shadow: $box-shadow-default;
    border-radius: 3px;
    padding: 0.375em 0;
    border-left: $border-small $color-blue solid;
}

.nav-items-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 300;
  font-size: rem($font-size-lg);
  color: #35495e;
  letter-spacing: 1px;
  padding: rem($spacing-sm);
}

.nav-item {
    padding: 0.185em 0.875em;
}

.nav-item__link {
    text-decoration: none;
    font-weight: 100;
    color: $color-gray;
    border-bottom: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: $color-blue;
    }
}

ul {
    list-style: none;
}

</style>
