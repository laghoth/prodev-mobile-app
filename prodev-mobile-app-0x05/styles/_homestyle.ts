import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb", // tailwind bg-gray-50
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchGroup: {
    marginBottom: 12,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e7eb", // tailwind bg-gray-200
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#6b7280", // tailwind text-gray-500
  },
  searchControl: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827", // tailwind text-gray-900
  },
  searchButton: {
    backgroundColor: "#111827", // tailwind bg-gray-900
    padding: 10,
    borderRadius: 9999,
    marginLeft: 12,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterContainer: {
    width: 72,
    height: 64,
    backgroundColor: "#f3f4f6", // tailwind bg-gray-100
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  listingContainer: {
    paddingTop: 12,
  },
  paginationContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#1f2937", // tailwind bg-gray-800
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 9999,
  },
  showMoreButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
