import  footerStyle from "../styles/footerStyle.css"
import Logo from "../assets/logo.png"
import TalkToUs from "../assets/talk.svg"
import NavBarHomePage from "./NavBarHomePage"
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

function Footer(){
    return(
        <section className="section-footer">
			<NavBarHomePage/>
			<div className="contact">
				<div class="custom-shape-divider-top-1681173828">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
					</svg>
				</div>
				
			<div class="content">
				
				<p>Por favor, preencha o formulário para que possamos ajudá-lo.</p>
			</div>
			<div class="container-footer">
				<div class="contactInfo">
					<div class="box">
						<div class="icon"><PlaceIcon/></div>
						<div class="text">
							<h3>Endereço</h3>
							<p>Cais do Apolo, 222 - 15º Andar - Recife, PE, 50030-230</p>
						</div>
					</div>
					<div class="box">
						<div class="icon"><PhoneIcon/></div>
						<div class="text">
							<h3>Telefone</h3>
							<p>4002-8922</p>
						</div>
					</div>
					<div class="box">
						<div class="icon"><AttachEmailIcon/></div>
						<div class="text">
							<h3>Email</h3>
							<p>propig@gmail.com</p>
							<p class="direitos-reservados">© 2023 Squad-19. Direitos Reservados.</p>
						</div>
					</div>
					<ul class="sci">
						<li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
						<li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
						<li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
						<li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
					</ul>
				</div>

				<div class="contactForm">
					<form method="post">
						<h2>Fale Conosco</h2>
						<div class="inputBox">
							<textarea required="required"></textarea>
							<span>CNPJ</span>
						</div>
						<div class="inputBox">
							<textarea required="required"></textarea>
							<span>Email</span>
						</div>
						<div class="inputBox">
							<textarea required="required"></textarea>
							<span>Digite sua Mensagem...</span>
						</div>
						<div class="inputBox">
							<input type="submit" value="Envie"/>
						</div>
					</form>
				</div>
			
		</div>

			</div>
			
	</section>
    )

}

export default Footer