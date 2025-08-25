import axios  from "axios";

// 创建一个Axios实例
const apiClient = axios.create({
    baseURL:'http://localhost:8080/api'
});

// 创建一个请求拦截器
apiClient.interceptors.request.use(
    (config) => {
        // 发送请求前从localStorage获取Token
        const token = localStorage.getItem('jwtToken');
        
        // 如果Token存在，添加到请求的Authorization头
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

export default apiClient;