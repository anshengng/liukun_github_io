async function m(o,r){await fetch("https://api.chatanywhere.com.cn/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW"},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:o}],stream:!0})}).then(t=>{const s=t.body.getReader(),a=new TextDecoder("utf-8");function n(){return s.read().then(({done:c,value:d})=>{if(c)return;const i=a.decode(d),h=/{[^{}]*}/g,f=i.match(h);for(const e of f){if(e.split(`
`)[2]==="[DONE]")break;const u=e.indexOf("{"),p=e.lastIndexOf("}"),g=e.substring(u,p+1),l=JSON.parse(g);r.value+=l.content??""}return n()})}n()}).catch(t=>{console.error("Error:",t)})}async function b(o,r){await fetch("https://api.chatanywhere.com.cn/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer sk-biUFdHeJmhMPPFQF5QaMbANSnZW1VXfc9zBFM4wWNB34IpRW"},body:JSON.stringify({model:"gpt-4",messages:[{role:"user",content:o}],stream:!0})}).then(t=>{const s=t.body.getReader(),a=new TextDecoder("utf-8");function n(){return s.read().then(({done:c,value:d})=>{if(c)return;const i=a.decode(d),h=/{[^{}]*}/g,f=i.match(h);for(const e of f){if(e.split(`
`)[2]==="[DONE]")break;const u=e.indexOf("{"),p=e.lastIndexOf("}"),g=e.substring(u,p+1),l=JSON.parse(g);r.value+=l.content??""}return n()})}n()}).catch(t=>{console.error("Error:",t)})}export{b as a,m as s};
