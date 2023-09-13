import { Category, RealEstate } from "../entities";
import AppError from "../errors/App.error";
import { AddressCreate } from "../interfaces/addresses.interfaces";
import { RealEstateCreate } from "../interfaces/realEstates.interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const create = async (payload: RealEstateCreate): Promise<RealEstate> => {
    const addressOfRealEstate: AddressCreate = addressRepo.create(
        payload.address
    );

    await addressRepo.save(addressOfRealEstate);

    const category: Category | null = await categoryRepo.findOneBy({
        id: Number(payload.categoryId),
    });

    if (!category) throw new AppError("Category not found", 404);

    const realEstate: RealEstate = realEstateRepo.create({
        ...payload,
        address: addressOfRealEstate,
        category: category,
    });
    await realEstateRepo.save(realEstate);

    return realEstate;
};

const read = async (): Promise<RealEstate[]> => {
    const allRealEstates: RealEstate[] = await realEstateRepo.find({
        relations: { address: true },
    });

    return allRealEstates;
};

export default { create, read };
