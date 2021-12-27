so = [[[], [], []], [[], [], []], [[], [], []]]

cont = 0

for c in range(0, 3):
    for p in range(0, 3):
        num = int(input(f'Write a number:[{c}:{p}]: '))
        so[c][p].append(num)
print(f"""
{so[0][0]}, {so[0][1]}, {so[0][2]}
{so[1][0]}, {so[1][1]}, {so[1][2]}
{so[2][0]}, {so[2][1]}, {so[2][2]}
""")
