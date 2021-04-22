<template>
<div>
    <ul>
        <li>
            <router-link to="/">Profiel</router-link>
        </li>
         <li>
            <router-link to="/zoeken">Zoeken</router-link>
        </li> <li>
            <router-link to="/berichten">Berichten</router-link>
        </li>
    </ul>
</div>
</template>

<style scoped>
div{
  width: 100vw;
  height: 4em !important;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

ul {
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 0;
  justify-content: space-between;
}

ul li {
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 2em;
  background-color: #5dfdcb;
  border: solid black 1px;
}

ul li a {
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

</style>