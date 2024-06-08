window.watsonAssistantChatOptions = {
    integrationID: "db47f2a8-4887-4ae6-a623-f0ab276ff9a2", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "674a31e0-0e32-40b2-a1cd-9ebad11c88b5", // The ID of your service instance.
    onLoad: async (instance) => {
        await instance.render();
    },
};
setTimeout(function () {
    const t = document.createElement("script");
    t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});