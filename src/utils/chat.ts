import axios from 'axios'
export async function send(content: string) {
    return await axios.post(
        'https://api.chatanywhere.com.cn/v1/chat/completions',
        {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: content
                }
            ],
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW"
            },
        }
    )
    

}

export async function sendByfour(content: string) {
    const res = await axios({
        url: 'https://api.chatanywhere.com.cn/v1/chat/completions',
        method: 'post',
        data: {
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: content
                }
            ]
        },
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW"
        }
    })
    return res;
}