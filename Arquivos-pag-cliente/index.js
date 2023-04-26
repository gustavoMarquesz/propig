const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const getLogo = document.querySelector("#logo");

//Mostrar sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//Fechar sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//Mudar theme 
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//ordem tabela

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.Cliente}</td>
    <td>${order.Rastreamento}</td>
    <td>${order.Pagamento}</td>
    <td class="${order.Status === 'Cancelado' ? 'danger' : order.Status === 'Pendente' ? 'warning' : 'success'}">${order.Status}</td>
    <td class="primary">Detalhes</td> `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})
