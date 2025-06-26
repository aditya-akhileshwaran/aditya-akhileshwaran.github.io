import { useState } from "react";

export const MeteorToggle = () => {
    const [showMeteor, setShowMeteor] = useState(true);

    return (
        <>
            {/* Toggle Button */}
            <button 
                onClick={() => setShowMeteor(!showMeteor)}
                className="fixed top-5 left-5 z-50 p-2 rounded-full transition-colors duration-300 bg-card border border-border hover:bg-primary hover:text-primary-foreground"
            >
                {showMeteor ? "🌟" : "⭐"}
            </button>

            {/* Meteor Element */}
            {showMeteor && <div className="meteor"></div>}
        </>
    );
};