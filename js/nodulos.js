document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("header").innerHTML = " <i class='bx bx-search-alt' id='buscador'></i>  <h1> OLyMPUS GYM</h1> <i class='bx bxs-user'></i> <i class='bx bx-cart'></i> ";

    document.getElementById("nav").innerHTML = `
    <input type='checkbox' id='menu-hamburguesa'>
    </input> <label for='menu-hamburguesa' class='lavel' > <img src='/images/icono/menu-alt-left-regular-24 (1).ico' class='img-menu' ></label>
        <ul class='menu'>
            <li><a href='index.html'>inicio</a> <i class='bx bxs-home'></i> </li>
            <li><a href='pagina3.html'>suplementos</a> <i class='bx bxs-zap'></i> </li>
            <li><a href='pagina1.html'>Indumentaria</a> <i class='bx bxs-star'></i> </li>
            <li><a href='pagina2.html'>Equipamiento</a> <i class='bx bx-dumbbell'></i> </li>
        </ul>`;

    document.getElementById("footer").innerHTML = "<p> INTEGRANTES : LEON BELTRAN - BELEN MARTINEZ - BRISA FARIAS </p>";
});
