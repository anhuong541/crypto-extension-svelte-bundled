
				{
					__sveltekit_d2urpw = {
						base: new URL(".", location).pathname.slice(0, -1)
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("./src/app/immutable/entry/start.DIlRuPlg.js"),
						import("./src/app/immutable/entry/app.C2-9Oo9q.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 2],
							data: [null,null],
							form: null,
							error: null
						});
					});
				}
			