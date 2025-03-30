import { Players, ReplicatedStorage } from "@rbxts/services";
import { heal, healall } from "shared/Code/Commands/heal";

function getOrCreateRemoteEvent(name: string): RemoteEvent {
	let event = ReplicatedStorage.FindFirstChild(name) as RemoteEvent | undefined;
	if (!event) {
		event = new Instance("RemoteEvent");
		event.Name = name;
		event.Parent = ReplicatedStorage;
	}
	return event;
}

const healEvent = getOrCreateRemoteEvent("HealEvent");
const healAllEvent = getOrCreateRemoteEvent("HealAllEvent");
const killEvent = getOrCreateRemoteEvent("KillEvent");
const killAllEvent = getOrCreateRemoteEvent("KillAllEvent");

healEvent.OnServerEvent.Connect((player) => heal(player));
healAllEvent.OnServerEvent.Connect((player) => healall(player));
