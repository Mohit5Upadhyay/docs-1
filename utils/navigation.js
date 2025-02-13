
export function prevNext(navigation, path) {
    let prev = null;
    let next = null;
    let found = false;

    const recursiveFetch = (children) => {
        if (children) {
            for (const item of children) {
                if (next && prev) {
                    break;
                }

                if (found && !next && !item.isSection) {
                    next = item;
                }

                if (item.path === path) {
                    found = true;
                }

                if (!found && !item.isSection) {
                    prev = item;
                }

                recursiveFetch(item?.children)
            }
        }
    };

    recursiveFetch(navigation);

    if(!found){
        // we're at a section's root
        prev = undefined;
        next = navigation[1];
    }else if(prev === null) {
        prev = navigation[0];
    }
    return {prev, next};
}

export const recursivePages = (item) => {
    const paths = [];
    if (item.isPage ?? true) {
        paths.push(item.path);
    }
    if (item.children) {
        paths.push(...(item.children.flatMap(child => {
            return recursivePages(child);
        })));
    }

    return paths;
}

export const generatePageNames = (item) => {
    const result = {};
    function traverse(item) {
        if (item.path && item.title) {
            let key = item.path.split("/")[item.path.split("/").length - 1];
            result[key] = item.title;
        }
        if (item.children) {
            item.children.forEach(child => traverse(child));
        }
    }
    traverse(item);
    return result;
}