import { jsx as _jsx, jsxs as _jsxs } from "frog/jsx/jsx-runtime";
import { Button } from "frog";
export const Welcome = (c) => {
    const { buttonValue } = c;
    // Club 001 info
    if (buttonValue === "flexclub001") {
        return c.res({
            image: (_jsxs("div", { style: {
                    alignItems: "center",
                    background: "linear-gradient(to right, #432889, #17101F)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    textAlign: "center",
                }, children: [_jsx("div", { style: {
                            color: "white",
                            fontSize: 40,
                            marginBottom: 20,
                        }, children: "Flexclub 1: Devcon Bangkok Trip" }), _jsx("p", { style: { color: "white", fontSize: 32 }, children: "Saving to attend DevCon 2024 in Bangkok" }), _jsx("p", { style: { color: "white", fontSize: 28 }, children: "Target: $800.00 USDC \uD83C\uDFAF" }), _jsx("p", { style: { color: "white", fontSize: 28 }, children: "Pooled: $18.9856 USDC \uD83D\uDCB0" }), _jsx("p", { style: { color: "white", fontSize: 28 }, children: "Members: 7 \uD83E\uDD1D" }), _jsx("p", { style: { color: "white", fontSize: 28 }, children: "APY: 4.41% \uD83D\uDCC8" })] })),
            intents: [_jsx(Button.Reset, { children: "Back to Club Selection" })],
        });
    }
    // Flexclub 2 info
    if (buttonValue === "flexclub002") {
        return c.res({
            image: (_jsxs("div", { style: {
                    alignItems: "center",
                    background: "linear-gradient(to right, #432889, #17101F)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    textAlign: "center",
                }, children: [_jsx("div", { style: {
                            color: "white",
                            fontSize: 40,
                            marginBottom: 20,
                        }, children: "Flexclub 2: Farcon 2025" }), _jsx("p", { style: { color: "white", fontSize: 32 }, children: "Save to attend Farcon 2025" }), _jsx("p", { style: { color: "white", fontSize: 28 }, children: "Target: $5,000.00 USDC \uD83C\uDFAF" }), _jsx("p", { style: { color: "white", fontSize: 28 }, children: "Pooled: $233.5218 USDC \uD83D\uDCB0" }), _jsx("p", { style: { color: "white", fontSize: 28 }, children: "Members: 4 \uD83E\uDD1D" }), _jsx("p", { style: { color: "white", fontSize: 28 }, children: "APY: 4.41% \uD83D\uDCC8" })] })),
            intents: [_jsx(Button.Reset, { children: "Back to Club Selection" })],
        });
    }
    // Club Selection Screen
    if (buttonValue === "proceed") {
        return c.res({
            image: (_jsx("div", { style: {
                    alignItems: "center",
                    background: "linear-gradient(to right, #432889, #17101F)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    textAlign: "center",
                }, children: _jsx("div", { style: {
                        color: "white",
                        fontSize: 40,
                        marginBottom: 20,
                    }, children: "Select a club to join" }) })),
            intents: [
                _jsx(Button, { value: "flexclub001", children: "Flexclub 1: Devcon Bangkok" }),
                _jsx(Button, { value: "flexclub002", children: "Flexclub 2: Farcon 2025" }),
            ],
        });
    }
    // Welcome Screen (default)
    return c.res({
        image: (_jsx("div", { style: {
                alignItems: "center",
                background: "linear-gradient(to right, #432889, #17101F)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                textAlign: "center",
            }, children: _jsx("div", { style: {
                    color: "white",
                    fontSize: 50,
                    lineHeight: 1.4,
                    padding: "0 120px",
                }, children: "Welcome to Flexclub" }) })),
        intents: [_jsx(Button, { value: "proceed", children: "Get started" })],
    });
};
