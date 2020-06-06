import axios from 'axios';
const baseUrl = 'http://localhost:3001';

export const SET_LOADING = 'SET_LOADING';
export const SET_LOGIN_MITRA = 'SET_LOGIN_MITRA';
export const SET_REGIST_MITRA = 'SET_REGIST_MITRA';
export const SET_DELETE_MITRA_PROFILE = 'SET_DELETE_MITRA_PROFILE';
export const SET_GET_MITRA_BUSINESS = 'SET_GET_MITRA_BUSINESS';
export const SET_EDIT_MITRA_PROFILE = 'SET_EDIT_MITRA_PROFILE';
export const SET_POST_MITRA_BUSINESS = 'SET_POST_MITRA_BUSINESS';
export const SET_EDIT_MITRA_BUSINESS = 'SET_POST_MITRA_BUSINESS';
export const SET_EDIT_MITRA_BUSINESS_INVEST = 'SET_POST_MITRA_BUSINESS_INVEST';
export const SET_EDIT_MITRA_BUSINESS_PROFIT = 'SET_POST_MITRA_BUSINESS_PROFIT';
export const SET_GET_MITRA_BUSINESS_AUTH = 'SET_GET_MITRA_BUSINESS_AUTH';
export const SET_ERROR_LOGIN_MITRA = 'SET_ERROR_LOGIN_MITRA';


export const set_edit_mitra_profile = (data) => {
    return { type: SET_EDIT_MITRA_PROFILE, payload: data }
}

export const setLoginMitra = (data) => {
    return { type: SET_LOGIN_MITRA, payload: data }
}

export const setLoading = (status) => {
    return { type: SET_LOADING, payload : status }
}

export const set_regist_mitra = (data) => {
    return { type: SET_REGIST_MITRA, payload: data }
}

export const set_delete_mitra_profile = (data) => {
    return { type: SET_DELETE_MITRA_PROFILE, payload: data }
}

export const set_mitra_business = (data) => {
    return { type: SET_GET_MITRA_BUSINESS, payload: data }
}

export const set_post_mitra_business = (data) => {
    return { type: SET_POST_MITRA_BUSINESS, payload: data }
}

export const set_edit_mitra_business = (data) => {
    return { type: SET_EDIT_MITRA_BUSINESS, payload: data }
}

export const set_edit_mitra_business_invest = (data) => {
    return { type: SET_EDIT_MITRA_BUSINESS_INVEST, payload: data }
}

export const set_edit_mitra_business_profit = (data) => {
    return { type: SET_EDIT_MITRA_BUSINESS_PROFIT, payload: data }
}

export const set_get_business_mitra_auth = (data) => {
    return { type: SET_GET_MITRA_BUSINESS_AUTH, payload: data}
}

//error

export const set_error_login_mitra = (status) => {
    return { type: SET_ERROR_LOGIN_MITRA, payload: status }
}

//main

export const loginMitra = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/signin`, {
                email: data.email, password: data.password
            })
            .then(({ data }) => {
                dispatch(setLoginMitra(data))
            })
            .catch(err => {
                console.log('error login mitra');
                dispatch(set_error_login_mitra(true))
            })
    }
}

export const registMitra = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/signup`, {
                name: data.name,
                email : data.email,
                password: data.password,
                bank_name: data.bank_name,
                bank_account: data.bank_account,
                account_number: data.account_number,
                address: ' ',
                photo_profile: ' ',
                phone: 0,
                document: {
                    KTP: {
                        no_KTP: Number(data.document.KTP.no_KTP),
                        url: data.document.KTP.url
                    },
                    NPWP: {
                        no_NPWP: data.document.NPWP.no_NPWP,
                        url: data.document.NPWP.url
                    },
                    KTA: {
                        kta: data.document.KTA.kta,
                        total_employee: Number(data.document.KTA.total_employee)
                    },
                    SIUP: {
                        no_SIUP: Number(data.document.SIUP.no_SIUP),
                        url: data.document.SIUP.url
                    }
                }
            })
            .then(({ data }) => {
                dispatch(set_regist_mitra(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getMitraBusinessAuth = (data) => {
    console.log('masuk store business auth');
    return (dispatch) => {
        axios
            .get(`${baseUrl}/mitra/business/${data.id}`, {
                headers: {
                    'token' : `${data.token}`
                }
            })
            .then(({ data }) => {
                dispatch(set_get_business_mitra_auth(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const editMitraProfile = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`${baseUrl}/mitra/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {

            })
    }
}


export const deleteMitraProfile = (id) => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/mitra/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {

            })
    }
}

export const getMitraBusiness = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/mitra/business`)
            .then(({ data }) => {
                console.log("ini dari redux",data);

                dispatch(set_mitra_business(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const postMitraBusiness = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/business`)
            .then(({ data }) => {

            })
            .catch(err => {

            })
    }
}

export const editMitraBusiness = (id, data) => {
    return (dispatch) => {
        axios
            .put(`${baseUrl}/mitra/business/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {

            })
    }
}

export const editMitraInvest = (id, data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/business/invest/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {

            })
    }
}

export const editMitraInvestProfit = (id, data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/business/profit/${id}`)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => {

            })
    }
}

export const investToBusiness = (data) => {
    const dataSend = {
        invest_value: data.invest_value,
        total_unit: data.total_unit
    }
    return (dispatch) => {
        axios
            .patch(`${baseUrl}/investor/business/${data.id}`, dataSend, { headers: {
                'token' : data.token
            }})
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}