import Swal from "sweetalert2"

export const successAlert = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Seu gurdião foi informado',
    showConfirmButton: false,
    timer: 1500
  })
}