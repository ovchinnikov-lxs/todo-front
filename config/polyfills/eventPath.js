(function() {
    if (!('path' in Event.prototype)) {
        Object.defineProperty(Event.prototype, 'path', {
            get() {
                const path = [];
                let currentElem = this.target;
                while (currentElem) {
                    path.push(currentElem);
                    currentElem = currentElem.parentElement;
                }
                if (!path.includes(window) && !path.includes(document)) {
                    path.push(document);
                }
                if (!path.includes(window)) {
                    path.push(window);
                }
                return path;
            },
        });
    }
})();
