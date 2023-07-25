'use client';

import { EditIcon, TrashIcon } from '@/assets/svg/icons';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  name: string;
}

const DataTableRow: React.FC<Props> = ({ name }) => {
  const [editingName, setEditingName] = useState(name);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  };

  const handleSaveChanges = () => {
    // Add logic here to save the changes made to the name
    // For example, you can make an API call to update the name in the database
    console.log('Saving changes:', editingName);

    // Close the dialog after saving changes
    setIsDialogOpen(false);
  };
  const handleDelete = () => {
    // Add logic here to delete the item
    // For example, you can make an API call to delete the item from the database
    console.log('Deleting:', editingName);

    // Close the delete modal after deletion
    setIsDeleteModalOpen(false);
  };
  const onCloseModal = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="w-full list_data p-5 flex items-center justify-between">
        <div>
          <h4 className="text-base text-black font-normal">{editingName}</h4>
        </div>
        <div className="flex items-center gap-4">
          <Dialog open={isDialogOpen}>
            <DialogTrigger asChild>
              <button onClick={() => setIsDialogOpen(true)}>
                <EditIcon />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Name</DialogTitle>
                <DialogDescription>
                  Make changes to your Name here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={editingName}
                    onChange={handleNameChange}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleSaveChanges}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button>
                <TrashIcon />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Confirm Delete</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>Are you sure you want to delete this item?</p>
              </div>
              <DialogFooter>
                <Button onClick={onCloseModal}>Cancel</Button>
                <Button onClick={handleDelete} variant={'destructive'}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default DataTableRow;
