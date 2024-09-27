import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/presentation/components/ui/table"
import { ProductTableProps } from "./product-table-types";
import { DeleteProductModal } from "../modals/delete-product-modal";
import { EditProductModal } from "../modals";
import { useProductTableViewModel } from "./product-table.view-model";

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onDeleteProduct,
  onEditProduct
}) => {
  const {
    handleChangeCurrentProduct,
    handleChangeProductForm,
    handleClickEditProduct,
    handleClickOpenEditModal,
    handleDeleteProduct,
    handleChangeDeleteModalIsOpen,
    handleChangeEditModalIsOpen,
    isDeleteModalOpen,
    isEditModalOpen,
    currentProduct
  } = useProductTableViewModel({
    onDeleteProduct,
    onEditProduct
  })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Titulo</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead className="text-right">Preço</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell className="text-right">R$ {product.price.toFixed(2).toString().replace('.', ',')}</TableCell>
            <TableCell className="text-right">
              <EditProductModal
                currentProduct={currentProduct}
                open={isEditModalOpen}
                onOpenChange={handleChangeEditModalIsOpen}
                product={product}
                handleChangeProductForm={handleChangeProductForm}
                handleClickEditProduct={handleClickEditProduct}
                handleClickOpenModal={handleClickOpenEditModal}
              />
              <DeleteProductModal
                product={product}
                handleChangeCurrentProduct={handleChangeCurrentProduct}
                handleDeleteProduct={handleDeleteProduct}
                open={isDeleteModalOpen} onOpenChange={handleChangeDeleteModalIsOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
