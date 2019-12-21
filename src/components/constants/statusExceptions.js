import Swal from 'sweetalert2';

export function succsessFetchData200(message) {
    Swal.fire({
        icon: 'success',
        title: message,
        target:message,
        showConfirmButton: false,
        timer: 3500
    })
}

export function badRequest400(message) {
    Swal.fire({
        icon: 'error',
        title: message,
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
    })
}

export function dataNotFound404(message) {
    Swal.fire({
        icon: 'error',
        title: message,
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
    })
}

export function internalServerError500(message) {
    Swal.fire({
        icon: 'error',
        title: message,
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
    })
}

export function insertSuccessData(data) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Data has been saved',
        target: data,
        showConfirmButton: false,
        timer: 3000
    })
}

export function errorFecthData(data) {
    Swal.fire({
        icon: 'error',
        title: 'Sorry...',
        target:data,
        timer:3000
    })
}

export async function successFetchData(data) {
    await Swal.fire({

    })
}

export async function confirmDeleteDataPopUpException(id) {
    await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        target:id,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
}
export async function deleteDataSuccess(data) {
    await Swal.fire(
        'Deleted!',
        `Your ${data}  has been deleted.`,
        'success'
    )
}
//export const successFetchData='200';
