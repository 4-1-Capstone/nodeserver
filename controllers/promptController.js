const axios = require('axios');

let prompt = {
    selectedMovie: "",
    gender: "",
    hairStyle: "",
    hasGlasses: false,
    fashion: "",
};

const updatePrompt = (req, res) => {
    const data = req.body;
    prompt.selectedMovie = data.selectedMovie || "";
    prompt.gender = data.gender || "";
    prompt.hairStyle = data.hairStyle || "";
    prompt.hasGlasses = data.hasGlasses || false;
    prompt.fashion = data.fashion || "";
    res.send('Prompt 업데이트 완료!');
};

const generateImage = async (req, res) => {
    let url = "https://modelslab.com/api/v6/images/text2img";
    let currentPrompt = "";

    if (prompt.selectedMovie === 'shinkai makoto, kimi no na wa') {
        currentPrompt = `shinkai makoto, kimi no na wa, full body shot, realistic pose, epic pose, Dynamic pose, Posing when taking pictures, japan travel, japanese shrine, sight, ${prompt.gender}, ${prompt.hairStyle}, ${prompt.hasGlasses},masterpiece,highly detailed,ultra-detailed, landscape, scenery,horizon, ${prompt.fashion}, marker, smile, solo`;
    } else {
        currentPrompt = `Ghibli, Sen and Chihiro, full body shot, realistic pose, epic pose, Dynamic pose, Posing when taking pictures, japan travel, working, working in japanese spa, water, spa, motel, busy, outdoor, ${prompt.gender}, ${prompt.hairStyle}, ${prompt.hasGlasses}, ${prompt.fashion}, colorful, high contrast`;
    }

    currentPrompt += `, random_text_${Math.floor(Math.random() * 100)}`;

    let payload = {
        key: process.env.API_KEY,
        model_id: "anything-v5",
        prompt: currentPrompt,
        negative_prompt: "only upper body, face zoom, expose body, three hands, three legs, fiction, fantasy,watermark,text, error, blurry, jpeg artifacts, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, artist name, (worst quality, low quality:1.4), bad anatomy",
        width: "512",
        height: "512",
        samples: "4",
        num_inference_steps: "30",
        seed: 3227021174,
        lora_model: "studio-ghibli-style-lora",
        guidance_scale: 7.5,
        scheduler: "UniPCMultistepScheduler",
        webhook: 0,
        track_id: 0,
    };

    let payload2 = {
        key: process.env.API_KEY,
        model_id: "cutyanime",
        prompt: currentPrompt,
        negative_prompt: "only upper body, face zoom, body exposure, bright hair, three hands, three legs, fiction, fantasy, watermark,text, error, blurry, jpeg artifacts, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, artist name, (worst quality, low quality:1.4), bad anatomy",
        width: "512",
        height: "512",
        samples: "4",
        num_inference_steps: "30",
        seed: 3938931364,
        lora_model: "ghibli-style",
        guidance_scale: 7.5,
        scheduler: "UniPCMultistepScheduler",
        webhook: 0,
        track_id: 0,
    };

    try {
        const response = prompt.selectedMovie === 'shinkai makoto, kimi no na wa' ? 
                         await axios.post(url, payload) : 
                         await axios.post(url, payload2);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error generating image');
    }
};

module.exports = {
    updatePrompt,
    generateImage
};