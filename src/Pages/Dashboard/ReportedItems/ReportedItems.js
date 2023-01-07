import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ReportedItems = () => {
    const [deletingReport, setDeletingReport] = useState(null)

    const { data: reports = [], isLoading, refetch } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/reports', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('recycleToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch { }
        }
    });

    const closeModal = () => {
        setDeletingReport(null)
    }

    const handleDeleteUser = (report) => {
        console.log(report)
        fetch(`http://localhost:5000/reports/${report._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('recycleToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Report from ${report.reporter} deleted successfully`)
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-3xl font-bold uppercase text-center py-5'>All Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Reporter</th>
                            <th>Seller</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.map((report, index) => <tr key={report._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={report.image} alt="laptop" />
                                        </div>
                                    </div>
                                </td>
                                <td>{report.productName}</td>
                                <td> {report?.resalePrice}</td>
                                <td> {report?.reporter}</td>
                                <td> {report?.seller}</td>
                                <td><label onClick={() => setDeletingReport(report)} htmlFor="confirmation-modal" className='btn btn-sm btn-error'>Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingReport && <ConfirmationModal
                    title={`Are you sure, you want to delete report from: ${deletingReport.reporter}`}
                    message={`If you delete, ${deletingReport.reporter}'s report will be lost permanently.`}
                    successAction={handleDeleteUser}
                    successButtonName="delete"
                    modalData={deletingReport}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }

        </div>
    );
};

export default ReportedItems;