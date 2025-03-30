import { Players, ReplicatedStorage } from "@rbxts/services";

Players.PlayerAdded.Connect((player) => {
	player.CharacterAdded.Connect((character) => {
		const Storage = ReplicatedStorage.WaitForChild("Arms") as Folder;
		const VFX = Storage.WaitForChild("Aqua").Clone() as Part;
		const humanoid = character.WaitForChild("Humanoid") as Humanoid;

		const rightArm = (character.FindFirstChild("Right Arm") || character.FindFirstChild("RightHand")) as
			| BasePart
			| undefined;
		if (rightArm) {
			VFX.CFrame = rightArm.CFrame;
			VFX.Parent = character;

			const weld = new Instance("WeldConstraint");
			weld.Part0 = rightArm;
			weld.Part1 = VFX;
			weld.Parent = VFX;
		}
	});
});
