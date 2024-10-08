'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/presentation/components/ui/dialog";
import { Plus } from 'lucide-react';
import { Input } from "@/presentation/components/ui/input";
import { Button } from "@/presentation/components/ui/button";
import { Label } from "@/presentation/components/ui/label";
import { AddClientModalProps } from "./add-client-modal-types";
import { useAddClientModalViewModel } from "./add-client-modal.view-model";

export const AddClientModal: React.FC<AddClientModalProps> = ({
  onOpenChange,
  open,
  onClientCreate
}) => {
  const {
    handleChangeClientForm,
    handleCreateClient,
    newClient,
    isLoading
  } = useAddClientModalViewModel({
    onClientCreate
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button><Plus className="mr-2 h-4 w-4" /> Adicionar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar novo cliente</DialogTitle>
          <DialogDescription>Coloque os detalhes do seu novo cliente.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Nome</Label>
            <Input
              id="name"
              value={newClient.name}
              name='name'
              onChange={handleChangeClientForm}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="age" className="text-right">Idade</Label>
            <Input
              id="age"
              type="number"
              value={newClient.age}
              name='age'
              onChange={handleChangeClientForm}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input
              id="email"
              value={newClient.email}
              name='email'
              onChange={handleChangeClientForm}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">Endereço</Label>
            <Input
              id="address"
              value={newClient.address}
              name='address'
              onChange={handleChangeClientForm}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleCreateClient} disabled={isLoading}>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
