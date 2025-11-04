import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from '../features/bookings/BookingTable'
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import AddBookings from '../features/bookings/AddBookings'

function Bookings() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <BookingTableOperations />
    </Row>

    <Row>
      <AddBookings />
      
      <BookingTable />
    </Row>
    </>
  );
}

export default Bookings;
