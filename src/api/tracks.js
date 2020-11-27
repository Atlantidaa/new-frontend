import axios from 'axios';
import config from '@/api/config';

export default {
    vk: {
         search: (payload) => {
            const uri = [config.url, config.vk.search.urn].join('/');

            return axios.get(uri, {
                params: {
                    query: payload.query,
                }
            }).catch(error => {
                console.log(error);
            });
        },
    },
    lastfm: {
        hints: (payload) => {
            const uri = [config.url, config.lastfm.hints.urn].join('/');

            return axios.get(uri, {
                params: {
                    query: payload.query,
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }
};