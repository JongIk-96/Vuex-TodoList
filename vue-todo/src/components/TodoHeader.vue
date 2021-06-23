<template>
    <header>
        <h1>TODO it!</h1>
        <!-- <h1>{{this.$store.state.headerText}}</h1> -->
    </header>
</template>

<script>
export default {

}
</script>

<style scoped> 
/* scoped : 상위 html요소의 style을 아래로 상속받게 되는걸 무시한다. */
h1 {
    color: #2F3852;
    font-weight : 900;
    margin: 2.5rem 0 1.5rem;
}
</style>
