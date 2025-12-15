import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import Swal from "sweetalert2";
import Loading from "../../components/Shared/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageRequests = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: requests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/requests");
      return response.data;
    },
  });

  const handleAccept = async (request) => {
    Swal.fire({
      title: "Accept Request?",
      text: `Are you sure you want to accept ${request.userName}'s request to become ${request.requestType}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10b981",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Accept",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/meals/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your meal has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleReject = async (request) => {
    const result = await Swal.fire({
      title: "Reject Request?",
      text: `Are you sure you want to reject ${request.userName}'s request?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Reject",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      rejectMutation.mutate(request._id);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Requests</h1>

      {requests.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500 text-lg">No requests found</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="my-th">User Name</th>
                  <th className="my-th">Email</th>
                  <th className="my-th">Request Type</th>
                  <th className="my-th">Status</th>
                  <th className="my-th">Request Time</th>
                  <th className="my-th">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requests.map((request) => (
                  <tr key={request._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {request.userName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {request.userEmail}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="rannafy-pending">
                        {request.requestType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="rannafy-pending">{request.requestStatus}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {format(
                        new Date(request.requestTime),
                        "MMM dd, yyyy HH:mm"
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {request.requestStatus === "pending" ? (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleAccept(request)}
                            className="rannafy-success"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleReject(request)}
                            className="rannafy-delete"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <div className="flex space-x-2">
                          <button
                            disabled
                            className="bg-gray-300 text-gray-500 px-4 py-2 rounded-md cursor-not-allowed"
                          >
                            Accept
                          </button>
                          <button
                            disabled
                            className="bg-gray-300 text-gray-500 px-4 py-2 rounded-md cursor-not-allowed"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRequests;
