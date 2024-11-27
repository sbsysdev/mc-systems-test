import { z } from 'zod';

export const countryNameValidator = z
    .string({
        required_error: 'country name is required!',
        invalid_type_error: 'country name must be a string!',
    })
    .trim()
    .min(3, 'country name is required!');

export const companyFilterValidator = z.object({
    country: countryNameValidator,
});
