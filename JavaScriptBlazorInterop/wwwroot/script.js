function generateChatMessages(dotnetObjectReference) {
    dotnetObjectReference.invokeMethodAsync("AddMessage", "Hello from JavaScript!")
    setTimeout(() => {
        dotnetObjectReference.invokeMethodAsync("AddMessage", "Are you still there?!")
    }, 2000);
    setTimeout(async () => {
        const name = await dotnetObjectReference.invokeMethodAsync("GetName")
        dotnetObjectReference.invokeMethodAsync("AddMessage", "Your name is: " + name + ".")
    }, 3000);
    setTimeout(() => {
        dotnetObjectReference.invokeMethodAsync("AddMessage", "Blazor and JavaScript live side-by-side!")
    }, 5000);
}