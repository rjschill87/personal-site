<template>
    <div class="profile-image-container">
        <img class="profile-image" src="./../assets/profile.jpg" />
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
                },
            ],
        }
    },
};
</script>

<style lang="scss" scoped>
@import './../assets/main.scss';

.profile-image-container {
    padding: rem($spacing-med);
    box-shadow: $box-shadow-default;
    border-radius: $border-radius-default;
    border-left: $border-small $color-red solid;
    background-color: $color-white;
}

.profile-image {
  max-width: 100%;
}

</style>
