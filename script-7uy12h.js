
				{
					__sveltekit_1h2kokb = {
						base: new URL(".", location).pathname.slice(0, -1)
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("./src/app/immutable/entry/start.2cnz7_Hz.js"),
						import("./src/app/immutable/entry/app.D_gAMMKy.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 2],
							data: [null,null],
							form: null,
							error: null
						});
					});
				}
			