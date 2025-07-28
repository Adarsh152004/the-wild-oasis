import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi} from "../../services/apiBookings";

export function useDeleteBooking() {
    const queryClient = useQueryClient();
    const {isLoading: isDeleting, mutate: deleteBooking} = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
        toast.success('Booking deleted successfully');
        // Invalidate the 'cabins' query to refetch the list of cabins
        queryClient.invalidateQueries({
            queryKey: ['bookings']
        });
        },
        onError: err => toast.error(err.message),
    });

    return {isDeleting, deleteBooking};
}