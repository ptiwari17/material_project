import React from 'react';
import * as Yup from 'yup';

const Schema = Yup.object({
    name: Yup.string().min(3,'too short').max(15, 'too long').required('name is must'),
    email: Yup.string().email().required('email is required')
});

export default Schema;
