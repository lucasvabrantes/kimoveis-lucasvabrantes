import { Category } from "../entities";
import AppError from "../errors/App.error";
import {
    CategoryCreate,
    CategoryRead,
    CategoryRepo,
} from "../interfaces/categories.interface";
import { categoryRepo } from "../repositories";
import { categorySchema } from "../schemas/categories.schemas";

const create = async (payload: CategoryCreate): Promise<CategoryCreate> => {
    const category: Category = categoryRepo.create(payload);
    await categoryRepo.save(category);
    return categorySchema.parse(category);
};

const read = async (): Promise<CategoryRead> => {
    return await categoryRepo.find();
};

const retrieve = async (categoryId: string): Promise<any> => {
    const realEstateByCategory: Category | null = await categoryRepo.findOne({
        where: { id: Number(categoryId) },
        relations: { realEstate: true },
    });

    if (!realEstateByCategory) throw new AppError("Category not found", 404);

    return realEstateByCategory;
};

export default { create, read, retrieve };
