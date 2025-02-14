import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns


# Load dataset
df = pd.read_csv("cleaned_dataset.csv")

# Display first 5 rows
print(df.head())

# Check dataset structure
print(df.info())

# Show missing values
print("Missing Values:\n", df.isnull().sum())

# Fill missing values for numeric columns
df.fillna(df.select_dtypes(include=['number']).mean(), inplace=True)

# Save cleaned data
df.to_csv("cleaned_dataset.csv", index=False)
print("Dataset cleaned and saved successfully.")

# Display basic statistics for numerical columns
print("\nBasic Statistics:\n", df.describe())

# Compute specific statistics manually
print("\nMean of numerical columns:\n", df.mean(numeric_only=True))
print("\nMedian of numerical columns:\n", df.median(numeric_only=True))
print("\nStandard Deviation of numerical columns:\n", df.std(numeric_only=True))


# Group by a categorical column and calculate mean of numerical columns
category_column = "species"  # Change this to the actual categorical column in your dataset
numerical_column = "petal_length"  # Change this to a numerical column

grouped_data = df.groupby(category_column)[numerical_column].min()
print(f"\nMean of '{numerical_column}' for each '{category_column}':\n", grouped_data)


### 📊 2. Bar Chart: Average Sepal Length per Species
plt.figure(figsize=(8, 5))
sns.barplot(x="species", y="sepal_length", data=df, estimator="mean")
plt.title("Average Sepal Length per Species")
plt.xlabel("Species")
plt.ylabel("Average Sepal Length")
plt.show()

### 📊 3. Histogram: Distribution of Petal Length
plt.figure(figsize=(8, 5))
sns.histplot(df["petal_length"], bins=20, kde=True, color="purple")
plt.title("Distribution of Petal Length")
plt.xlabel("Petal Length")
plt.ylabel("Count")
plt.show()

### 📊 4. Scatter Plot: Sepal Length vs Petal Length
plt.figure(figsize=(8, 5))
sns.scatterplot(x=df["sepal_length"], y=df["petal_length"], hue=df["species"], palette="viridis")
plt.title("Sepal Length vs Petal Length")
plt.xlabel("Sepal Length")
plt.ylabel("Petal Length")
plt.legend(title="Species")
plt.show()
