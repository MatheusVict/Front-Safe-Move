import Swal from "sweetalert2"

export const errorAlert = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Parece que algo deu errado',
    footer: '<a href="/">Deseja voltar a tela de login?</a>'
  })
}