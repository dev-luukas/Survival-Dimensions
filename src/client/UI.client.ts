import { Players, StarterGui } from "@rbxts/services";

const Player = Players.LocalPlayer;
const PlayerGui = Player.WaitForChild("PlayerGui") as PlayerGui;

Player.CharacterAdded.Connect((character) => {
	const humanoid = character.WaitForChild("Humanoid") as Humanoid;
	const UI = PlayerGui.WaitForChild("CoreGui") as ScreenGui;
	const Frame = UI.WaitForChild("Bg") as Frame;
	const NameLabel = Frame.WaitForChild("Name") as TextLabel;
	const HealthLabel = Frame.WaitForChild("Health") as TextLabel;

	NameLabel.Text = Player.Name;

	const updateHealth = () => {
		HealthLabel.Text = tostring(math.floor(humanoid.Health));
	};
	humanoid.GetPropertyChangedSignal("Health").Connect(updateHealth);

	updateHealth();
});
