"use client";

import { authClient } from "@/lib/auth-client";

const UserModal = ({ open, setOpen }) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        await authClient.updateUser({
            image,
            name,
        })
        
        
    }
    return (
        <dialog className="modal" open={open}>
            <div className="modal-box">

                <h3 className="font-bold text-lg">Edit Profile</h3>
                <div className="flex items-center justify-center pt-3">
                    <form onSubmit={onSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input validator" placeholder="Name" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Image</label>
                            <input name='image' type="url" className="input validator" placeholder="Image" />

                        </fieldset>

                        <div className="flex gap-3 modal-action">
                            <button onClick={() => setOpen(false)} className="btn btn-neutral " type="submit">
                                Save
                            </button>

                            <button className="btn btn-ghost " type="reset">
                                Reset
                            </button>
                        </div>



                    </form>
                </div>

               

            </div>
        </dialog>
    );
};

export default UserModal;