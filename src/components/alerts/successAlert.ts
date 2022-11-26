import Swal from "sweetalert2"

export const successAlert = (message: string) => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500
  })
}