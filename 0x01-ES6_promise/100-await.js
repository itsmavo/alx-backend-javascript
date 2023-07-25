import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
	try {
		const prom = await uploadPhoto();
		const prom1 = await createUser();

		return ({ photo: prom, user: prom1 });
	} catch (error) {
		return ({ photo: null, user: null });
	}
}
