import Modal from "../../ui/Modal"
import NewBookingForm from "./NewBookingForm"
import Button from "../../ui/Button"

function AddBookings() {
    return (
        <div>
                 <Modal>
                        <Modal.Open opens='booking-form'>
                        <Button>Add new booking</Button>
                        </Modal.Open>
                        <Modal.Window name='booking-form'>
                          <NewBookingForm />
                        </Modal.Window>
                        </Modal>
        </div>
    )
}

export default AddBookings
